import React, { useEffect, useState } from "react";
import { api } from "../../api";

const SubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api
      .get("/newsletter")
      .then((res) => {
        if (mounted) setSubscribers(res.data);
      })
      .catch(() => {})
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return <div className="section-loading">Loading subscribers...</div>;

  return (
    <div>
      <h2>Newsletter Subscribers</h2>
      <div className="table">
        <div className="table-header">
          <span>Email</span>
          <span>Joined</span>
        </div>
        {subscribers.map((s) => (
          <div className="table-row" key={s._id}>
            <span>{s.email}</span>
            <span>{new Date(s.createdAt).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriberList;


