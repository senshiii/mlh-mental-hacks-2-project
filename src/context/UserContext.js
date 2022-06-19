import { createContext, useState } from "react";

export const UserContext = createContext({
  uid: "",
  setUid: (uid) => {},
  name: "",
  email: "",
  dob: null,
  profilePhoto: "",
  meditationDates: [],
  onProfileLoad: (name, email, dob, profilePhoto, meditationData) => {},
});

const UserContextProvider = ({ children }) => {
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [meditationData, setMeditationData] = useState([]);

  const onProfileLoadHandler = (
    name,
    email,
    dob,
    profilePhoto,
    meditationData
  ) => {
    setName(name);
    setEmail(email);
    setDob(dob);
    setProfilePhoto(profilePhoto);
    setMeditationData(meditationData);
  };

  return (
    <UserContext.Provider
      value={{
        uid,
        setUid,
        name,
        email,
        profilePhoto,
        meditationDates: meditationData,
        onProfileLoad: onProfileLoadHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
