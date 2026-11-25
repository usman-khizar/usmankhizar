import Script from 'next/script'

const FORM_ID = '4pJtCDndQtutaGWLDgEr'

/** The "Send Enquiry" form, hosted in GHL. Edit its fields in GHL, not here. */
export default function GhlForm() {
  return (
    // form_embed.js hides the iframe with position:absolute while it loads, so anchor it to
    // this box. Otherwise it is measured at the full page width and clipped on phones.
    <div style={{ position: 'relative' }}>
      <iframe
        src={`https://link.readyondemand.com/widget/form/${FORM_ID}`}
        style={{ width: '100%', height: '525px', border: 'none', borderRadius: '8px' }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Send Enquiry"
        data-height="525"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Send Enquiry"
      />
      <Script src="https://link.readyondemand.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  )
}
