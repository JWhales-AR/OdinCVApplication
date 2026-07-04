function EditorInput({name, id, labelText, inputType="text"}) {
  return (
      <div className="editor-input-wrapper">
        <label htmlFor={id}>{labelText}</label>
        {inputType === "textarea"?
         <textarea className="editor-input" name={name} id={id}/>
         : <input className="editor-input" name={name} id={id} type={inputType} />}
      </div>
  );
}

function EditorFieldSet({summary, children}) {
  return (
    <fieldset className="editor-column-fieldset">
      <details className="editor-column-fieldset-details">
        <summary>{summary}</summary>
        {children}
      </details>
    </fieldset>
  );
}

function EditorPersonalDetails() {
  return (
    <form id="editor-personal-details" className="editor-column">
      <p className="editor-column-header">Personal Details</p>
      <EditorFieldSet>
        <EditorInput key="person-name" name="person_name" id="person-name" labelText="Full Name" />
        <EditorInput key="person-phone" name="person_phone" id="person-phone" labelText="Phone Number" />
        <EditorInput key="person-mail" name="person_mail" id="person-mail" labelText="Email" inputType="mail" />
        <EditorInput key="person-loaction" name="person_location" id="person-location" labelText="Location" />
      </EditorFieldSet>
    </form>
  );
}

function EditorProfessionalExperience() {
  return (
    <form id="editor-professional-experience" className="editor-column">
      <p className="editor-column-header">Professional Experience</p>
      <EditorFieldSet summary="Many Task Force Teams">
        <EditorInput key="pe-company-name" name="pe_company_name" id="pe-company-name" labelText="Company Name" />
        <div className="editor-date-wrapper">
          <EditorInput key="pe-work-date-start" name="pe_work_date_start" id="pe-work-date-start" labelText="Start Year" />
          <EditorInput key="pe-work-date-end" name="pe_work_date_end" id="pe-work-date-end" labelText="End Year" />
        </div>
        <EditorInput key="pe-job-title" name="pe_job_title" id="pe-job-title" labelText="Job Title" />
        <EditorInput key="pe-description" name="pe_description" id="pe-description" labelText="Description" inputType="textarea" />
      </EditorFieldSet>
    </form>
  );
}

function EditorEducation() {
  return (
    <form id="editor-education" className="editor-column">
      <p className="editor-column-header">Education</p>
      <EditorFieldSet summary="F.O.S. College">
        <EditorInput key="e-school-name" name="e_company_name" id="e-company-name" labelText="School Name" />
        <div className="editor-date-wrapper">
          <EditorInput key="e-date-start" name="e_date_start" id="e-date-start" labelText="Start Year" />
          <EditorInput key="e-date-end" name="e_date_end" id="e-date-end" labelText="End Year" />
        </div>
        <EditorInput key="e-comments" name="e_comments" id="e-comments" labelText="Graduation Comments" />
      </EditorFieldSet>
    </form>
  );
}

export default function Editor() {
  return (
    <section id="editor" className="editor-preview-column">
      <EditorPersonalDetails />
      <EditorProfessionalExperience />
      <EditorEducation />
    </section>
  );
}
