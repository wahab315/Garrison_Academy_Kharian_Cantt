import PageHead from "@/components/PageHead";
import { ToastButton } from "@/components/Toast";

export const metadata = { title: "Feedback & Complaints" };

export default function FeedbackPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Feedback / Complaints" }]} eyebrow="We're Listening" title="Feedback & Complaints" intro="Share suggestions or raise a concern — about teachers, administrative staff or anything else." />
      <div className="sec"><div className="wrap"><div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div className="form">
          <div className="frow">
            <div className="field"><label>Your name</label><input placeholder="Optional — you may stay anonymous" /></div>
            <div className="field"><label>Contact (optional)</label><input placeholder="Phone or email" /></div>
          </div>
          <div className="frow">
            <div className="field"><label>Type <span className="req">*</span></label><select><option>Complaint</option><option>Feedback</option><option>Suggestion</option></select></div>
            <div className="field"><label>Regarding <span className="req">*</span></label><select><option>Teachers</option><option>Administrative Staff</option><option>General</option></select></div>
          </div>
          <div className="field"><label>Your message <span className="req">*</span></label><textarea placeholder="Describe your feedback or concern in detail…" /></div>
          <ToastButton msg="Thank you — your submission has been received." className="btn-submit">Submit</ToastButton>
          <p className="formnote">All submissions are reviewed confidentially by the administration. Genuine complaints receive a follow-up where contact details are provided.</p>
        </div>
      </div></div></div>
    </>
  );
}
