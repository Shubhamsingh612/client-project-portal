import React, { useState } from "react";
import AddProject from "../components/Admin/AddProject";
import AddClient from "../components/Admin/AddClient";
import ContactList from "../components/Admin/ContactList";
import SubscriberList from "../components/Admin/SubscriberList";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <div className="tabs">
        <button
          type="button"
          className={activeTab === "projects" ? "tab active" : "tab"}
          onClick={() => setActiveTab("projects")}
        >
          Add Project
        </button>
        <button
          type="button"
          className={activeTab === "clients" ? "tab active" : "tab"}
          onClick={() => setActiveTab("clients")}
        >
          Add Client
        </button>
        <button
          type="button"
          className={activeTab === "contacts" ? "tab active" : "tab"}
          onClick={() => setActiveTab("contacts")}
        >
          Contact Forms
        </button>
        <button
          type="button"
          className={activeTab === "subscribers" ? "tab active" : "tab"}
          onClick={() => setActiveTab("subscribers")}
        >
          Newsletter Subscribers
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "projects" && <AddProject />}
        {activeTab === "clients" && <AddClient />}
        {activeTab === "contacts" && <ContactList />}
        {activeTab === "subscribers" && <SubscriberList />}
      </div>
    </div>
  );
};

export default Admin;


