namespace HospitalApi.Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public string Doc_name { get; set; }
        public string Pat_name { get; set; }
        public DateTime Appointment_date { get; set; }
    }
}
