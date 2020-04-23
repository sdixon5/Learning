using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Helpers;

namespace Call_API
{
    class Program
    {
        static void Main(string[] args)
        {
           DataTable results = GetInfo().Result;

            writeData(results);

        }

        public static async Task<DataTable> GetInfo()
        {
            // Initialization.  
            DataTable test = new DataTable();


            // HTTP GET.  
            using (var client = new HttpClient())
            {
                // Setting Base address.  
                client.BaseAddress = new Uri("https://ithelpdesk.greeleyschools.org/helpdesk/WebObjects/Helpdesk.woa/ra/Clients/");

                // Setting content type.  
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                // Initialization.  
                HttpResponseMessage response = new HttpResponseMessage();

                // HTTP GET  
                response = await client.GetAsync("?qualifier=(email%20like%20'sdixon3*')&apiKey=3DZxGGKBZxASZYiG8zkI9KsmtkMGzajjcMYaaAcw").ConfigureAwait(false);


                // Verification  
                if (response.IsSuccessStatusCode)
                {
                //    // Reading Response.  
                    string result = response.Content.ReadAsStringAsync().Result;
                    JArray jsonArray = JArray.Parse(result);
                    dynamic data = JObject.Parse(jsonArray[0].ToString());
                    test = ConvertToDataTable(data);

                }

            }

            return test;
        }

        public static void writeData(DataTable results)
        {

            Console.WriteLine(results.Rows[0].ItemArray[0].ToString());
            Console.ReadLine();
        }

        public static DataTable ConvertToDataTable<T>(IList<T> data)
        {
            PropertyDescriptorCollection properties =
               TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            foreach (PropertyDescriptor prop in properties)
                table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
            foreach (T item in data)
            {
                DataRow row = table.NewRow();
                foreach (PropertyDescriptor prop in properties)
                    row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
                table.Rows.Add(row);
            }
            return table;

        }
    }
}
