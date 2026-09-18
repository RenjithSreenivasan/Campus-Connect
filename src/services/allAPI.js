import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

// Get all events from JSON server
export const getEventsAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/events`, "");
};

// Get all announcements from JSON server
export const getAnnouncementsAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/announcements`, "");
};

// Get all tasks from JSON server
export const getTasksAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/tasks`, "");
};

// Get profile from JSON server
export const getProfileAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/profile`, "");
};

// Update profile on JSON server
export const updateProfileAPI = async (profileData) => {
  return await commonAPI("PUT", `${SERVER_URL}/profile`, profileData);
};

// Submit contact inquiry to JSON server
export const submitContactAPI = async (contactData) => {
  return await commonAPI("POST", `${SERVER_URL}/contacts`, contactData);
};

