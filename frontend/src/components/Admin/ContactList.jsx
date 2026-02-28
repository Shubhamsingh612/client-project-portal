import React, { useEffect, useState } from "react";
import { api } from "../../api";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api
      .get("/contact")
      .then((res) => {
        if (mounted) setContacts(res.data);
      })
      .catch(() => {})
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="section-loading">Loading contacts...</div>;

  return (
    <div>
      <h2>Contact Forms</h2>
      <div className="table">
        <div className="table-header">
          <span>Name</span>
          <span>Email</span>
          <span>Mobile</span>
          <span>City</span>
          <span>Message</span>
        </div>
        {contacts.map((c) => (
          <div className="table-row" key={c._id}>
            <span>{c.name}</span>
            <span>{c.email}</span>
            <span>{c.mobile}</span>
            <span>{c.city}</span>
            <span>{c.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;


