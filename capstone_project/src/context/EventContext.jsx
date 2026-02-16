// This context provider file enables the user to manipulate the events.

import React, { createContext, useState, useEffect, useContext } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  // Load events from LocalStorage on mount
  useEffect(() => {
    const savedEvents = localStorage.getItem("userEvents");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  // Save to LocalStorage whenever events state changes
  useEffect(() => {
    localStorage.setItem("userEvents", JSON.stringify(events));
  }, [events]);

  // CREATE: Add a new event
  const addEvent = (newEvent) => {
    // Generate a unique ID (needed for .map() keys and deleting)
    const eventWithId = { ...newEvent, id: Date.now() };
    setEvents((prev) => [...prev, eventWithId]);
  };

  // UPDATE: Edit an existing event
  const updateEvent = (id, updatedData) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, ...updatedData } : event,
      ),
    );
  };

  // DELETE: Remove an event
  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider
      value={{ events, addEvent, updateEvent, deleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);

// References

// freeCodeCamp article - Joy Shaheb - Learn CRUD Operations in JavaScript by Building TODO APP (13 April 2022) - https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/
// React v19.2 Learn - Managing State - Passing Data Deeply with Context - https://react.dev/learn/passing-data-deeply-with-context
