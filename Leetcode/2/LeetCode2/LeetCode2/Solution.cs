﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace LeetCode2
{
    public class Solution
    {
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            string nodeOne = string.Empty;
            string nodeTwo = string.Empty;

            while(l1 != null)
            {
                nodeOne = nodeOne + l1.val.ToString();
                l1 = l1.next;
            }

            while(l2 != null)
            {
                nodeTwo = nodeTwo + l2.val.ToString();
                l2 = l2.next;
            }

            char[] nodeOneChars = nodeOne.ToCharArray();
            char[] nodeTwoChars = nodeTwo.ToCharArray();

            Array.Reverse(nodeOneChars);
            Array.Reverse(nodeTwoChars);

            nodeOne = new string(nodeOneChars);
            nodeTwo = new string(nodeTwoChars);

            BigInteger valueToReturn = BigInteger.Parse(nodeOne) + BigInteger.Parse(nodeTwo);

            string output = valueToReturn.ToString();

            char[] outputChars = output.ToCharArray();

            Array.Reverse(outputChars);

            string first = new string(outputChars, 0, 1);

            ListNode head = new ListNode(Convert.ToInt32(first));
            ListNode current = head;

            for (int i = 1; i < outputChars.Length; i++)
            {
                string val = new string(outputChars, i, 1);
                current.next = new ListNode(Convert.ToInt32(val));
                current = current.next;
            }

            return head;
        }
    }
}
