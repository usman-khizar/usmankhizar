import { isDbConfigured } from '@/lib/db'
import EnquiryForm from './EnquiryForm'
import GhlForm from './GhlForm'

/** Our own enquiry form once the CRM database is connected; until then, the GHL-hosted form. */
export default function ContactForm() {
  return isDbConfigured() ? <EnquiryForm /> : <GhlForm />
}
