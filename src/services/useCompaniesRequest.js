import { useHttp } from "../hooks/http.hook";

const useCompaniesRequest = () => {
  const { request } = useHttp();

  const getCompanies = async (city) => {
    const response = await request(`http://localhost:3001/cityCompanies`);
    return transformCompanies(response, city);
  };

  const transformCompanies = (data, city) => {
    const cityCompanies = data.filter((item) => {
      const res = item.cities.some((cityItem) => cityItem === city);
      if (res) {
        return item;
      }
    });
    return cityCompanies;
  };

  return { getCompanies };
};

export default useCompaniesRequest;
