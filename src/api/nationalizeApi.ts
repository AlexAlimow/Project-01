import type { NationalityInformation } from "../components/NationalityDetector/types/NationalityInformation";

export const fetchNationality = async (
  name: string
): Promise<NationalityInformation> => {
    const response = await fetch(`https://api.nationalize.io/?name=${encodeURIComponent(name)}` 
  );
  if (!response.ok) {
    throw new Error("Failed to fetch nationality data");
  }
  return response.json();
};
