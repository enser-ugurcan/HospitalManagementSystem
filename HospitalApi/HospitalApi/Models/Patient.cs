namespace HospitalApi.Models

{
    public class Patient
    {
        
        public int Id { get; set; }
        public string Pat_first_name { get; set; }
        public string Pat_last_name { get; set; }
        public string Pat_insurance_no { get; set; }
        public string Pat_ph_no { get; set; }
        public string Pat_address { get; set; }
    }
}
