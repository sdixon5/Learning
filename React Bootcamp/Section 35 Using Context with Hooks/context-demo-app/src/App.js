import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Form from "./Form";
import { PageContent } from "./PageContent";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { LanguageProvider } from "./Contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
