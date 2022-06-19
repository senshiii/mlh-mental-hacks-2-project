import { createContext, useState } from "react";

export const UserContext = createContext({
  uid: "",
  name: "",
  email: "",
  dob: null,
  profilePhoto: "",
  meditationDates: [],
  setUid: (uid) => {},
  addMeditationRecord: (record) => {},
  onProfileLoad: (name, email, dob, profilePhoto, meditationData, coins) => {},
});

const UserContextProvider = ({ children }) => {
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [meditationData, setMeditationData] = useState([]);
  const [coins, setCoins] = useState(0);

  const onProfileLoadHandler = (
    name,
    email,
    dob,
    profilePhoto,
    meditationData,
    coins
  ) => {
    setName(name);
    setEmail(email);
    setDob(dob);
    setProfilePhoto(profilePhoto);
    setMeditationData(meditationData);
    setCoins(coins);
  };

  return (
    <UserContext.Provider
      value={{
        uid,
        setUid,
        name,
        email,
        coins,
        profilePhoto,
        meditationDates: meditationData,
        onProfileLoad: onProfileLoadHandler,
        addMeditationRecord: (record) =>
          setMeditationData([...meditationData, record]),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
