export interface SearchRequest {
  id: string;
  companyId: string;
  city: string;
  district?: string;
  minRooms?: number;
  maxRooms?: number;
  maxPrice?: number;
  email?: string;
  phone?: string;
}
