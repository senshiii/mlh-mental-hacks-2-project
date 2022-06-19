export async function fetchCharities() {
  const data = await fetch(
    `https://api.globalgiving.org/api/public/projectservice/themes/mentalhealth/projects?api_key=${process.env.REACT_APP_CHARITY_API_KEY}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const charities = await data.json();
  return charities;
}

