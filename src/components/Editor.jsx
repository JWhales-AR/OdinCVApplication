function EditorInput({name, id, labelText, value, updateValue, inputType="text"}) {
  return (
      <div className="editor-input-wrapper">
        <label htmlFor={id}>{labelText}</label>
        {inputType === "textarea"?
         <textarea className="editor-input" name={name} id={id} value={value} onChange={updateValue} />
         : <input className="editor-input" name={name} id={id} value={value} onChange={updateValue} type={inputType} />}
      </div>
  );
}

function EditorFieldSet({summary, collapsable=true, children}) {
  let fieldSetMain = (
    <fieldset className="editor-column-fieldset">
      {children}
    </fieldset>
  );
  return (
    collapsable?
      <details className="editor-column-fieldset-details">
        <summary>{summary}</summary>
        {fieldSetMain}
      </details>
    : fieldSetMain
  );
}

function EditorPersonalDetails({details, setDetails}) {
  return (
    <form id="editor-personal-details" className="editor-column">
      <p className="editor-column-header">Personal Details</p>
      <EditorFieldSet collapsable={false}>
        <EditorInput
          key="person-name" name="person_name" id="person-name" labelText="Full Name"
          value={details.fullName} updateValue={event =>
            setDetails({...details, fullName: event.target.value})
          }
        />
        <EditorInput
          key="person-phone" name="person_phone" id="person-phone" labelText="Phone Number"
          value={details.phoneNumber} updateValue={event =>
            setDetails({...details, phoneNumber: event.target.value})
          }
        />
        <EditorInput
          key="person-mail" name="person_mail" id="person-mail" labelText="Email" inputType="mail"
          value={details.eMail} updateValue={event =>
            setDetails({...details, eMail: event.target.value})
          }
        />
        <EditorInput
          key="person-loaction" name="person_location" id="person-location" labelText="Location"
          value={details.location} updateValue={event =>
            setDetails({...details, location: event.target.value})
          }
        />
      </EditorFieldSet>
    </form>
  );
}

function EditorProfessionalExperience() {
  let professionalExperienceItems = [
    { id: 1, summary: "Many Task Force Teams" },
    { id: 2, summary: "Strike Hawks" },
  ];
  return (
    <form id="editor-professional-experience" className="editor-column">
      <p className="editor-column-header">Professional Experience</p>
      {professionalExperienceItems.map(({id, summary}) =>
        <EditorFieldSet key={id} summary={summary}>
          <EditorInput key="pe-company-name" name="pe_company_name" id={`pe-company-name-${id}`} labelText="Company Name" />
          <div className="editor-date-wrapper">
            <EditorInput key="pe-work-date-start" name="pe_work_date_start" id={`pe-work-date-start-${id}`} labelText="Start Year" />
            <EditorInput key="pe-work-date-end" name="pe_work_date_end" id={`pe-work-date-end-${id}`} labelText="End Year" />
          </div>
          <EditorInput key="pe-job-title" name="pe_job_title" id={`pe-job-title-${id}`} labelText="Job Title" />
          <EditorInput key="pe-description" name="pe_description" id={`pe-description-${id}`} labelText="Description" inputType="textarea" />
        </EditorFieldSet>
      )}
    </form>
  );
}

function EditorEducation() {
  let educationItems = [
    { id: 1, summary: "F.O.S. College" },
    { id: 2, summary: "Tutored Under John Smith" },
  ];
  return (
    <form id="editor-education" className="editor-column">
      <p className="editor-column-header">Education</p>
      {educationItems.map(({id, summary}) =>
        <EditorFieldSet key={id} summary={summary}>
          <EditorInput key="e-school-name" name="e_company_name" id={`e-company-name-${id}`} labelText="School Name" />
          <div className="editor-date-wrapper">
            <EditorInput key="e-date-start" name="e_date_start" id={`e-date-start-${id}`} labelText="Start Year" />
            <EditorInput key="e-date-end" name="e_date_end" id={`e-date-end-${id}`} labelText="End Year" />
          </div>
          <EditorInput key="e-comments" name="e_comments" id={`e-comments-${id}`} labelText="Graduation Comments" />
        </EditorFieldSet>
      )}
    </form>
  );
}

export default function Editor({personalDetailsState}) {
  let [personalDetails, setPersonalDetails] = personalDetailsState;
  return (
    <section id="editor" className="editor-preview-column">
      <EditorPersonalDetails details={personalDetails} setDetails={setPersonalDetails} />
      <EditorProfessionalExperience />
      <EditorEducation />
    </section>
  );
}
