import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function NewAppointment({params : {userId}} :SearchParamProps) {
  const patient = await getPatient(userId)
  return (
    <div className="flex h-screen max-h-screen">
      {/* OTP VERIFICATION LATER */}
      <section className="scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm 
          type="create"
          userId={userId}
          patientId = {patient.$id}
          />

          <p className="copyright py-12 mt-10">
              © 2024 Patient&Docs
            </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        alt="appointment"
        width={1000}
        height={1000}
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
