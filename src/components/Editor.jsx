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

function EditorProfessionalExperience({experiences, setExperiences}) {
  return (
    <form id="editor-professional-experience" className="editor-column">
      <p className="editor-column-header">Professional Experience</p>
      {experiences.map(({id, start, end, header, subheader, description}) =>
        <EditorFieldSet key={id} summary={header}>
          <EditorInput
            key="pe-company-name" name="pe_company_name" id={`pe-company-name-${id}`} labelText="Company Name"
            value={header} updateValue={event => {
              setExperiences(
                experiences.map(
                  job => job.id === id ?
                    {...job, header: event.target.value} : job
                ));
            }}
          />
          <div className="editor-date-wrapper">
            <EditorInput
              key="pe-work-date-start" name="pe_work_date_start" id={`pe-work-date-start-${id}`} labelText="Start Year"
              value={start} updateValue={event => {
                setExperiences(
                  experiences.map(
                    job => job.id === id ?
                      {...job, start: event.target.value} : job
                  ));
              }}
            />
            <EditorInput
              key="pe-work-date-end" name="pe_work_date_end" id={`pe-work-date-end-${id}`} labelText="End Year"
              value={end} updateValue={event => {
                setExperiences(
                  experiences.map(
                    job => job.id === id ?
                      {...job, end: event.target.value} : job
                  ));
              }}
            />
          </div>
          <EditorInput
            key="pe-job-title" name="pe_job_title" id={`pe-job-title-${id}`} labelText="Job Title"
            value={subheader} updateValue={event => {
              setExperiences(
                experiences.map(
                  job => job.id === id ?
                    {...job, subheader: event.target.value} : job
                ));
            }}
          />
          <EditorInput
            key="pe-description" name="pe_description" id={`pe-description-${id}`} labelText="Description" inputType="textarea"
            value={description} updateValue={event => {
              setExperiences(
                experiences.map(
                  job => job.id === id ?
                    {...job, description: event.target.value} : job
                ));
            }}
          />
        </EditorFieldSet>
      )}
    </form>
  );
}

function EditorEducation({education, setEducation}) {
  return (
    <form id="editor-education" className="editor-column">
      <p className="editor-column-header">Education</p>
      {education.map(({id, start, end, header, subheader}) =>
        <EditorFieldSet key={id} summary={header}>
          <EditorInput
            key="e-school-name" name="e_company_name" id={`e-company-name-${id}`} labelText="School Name"
            value={header} updateValue={event => {
              setEducation(
                education.map(
                  job => job.id === id ?
                    {...job, header: event.target.value} : job
                ));
            }}
          />
          <div className="editor-date-wrapper">
            <EditorInput
              key="e-date-start" name="e_date_start" id={`e-date-start-${id}`} labelText="Start Year"
              value={start} updateValue={event => {
                setEducation(
                  education.map(
                    job => job.id === id ?
                      {...job, start: event.target.value} : job
                  ));
              }}
            />
            <EditorInput
              key="e-date-end" name="e_date_end" id={`e-date-end-${id}`} labelText="End Year"
              value={end} updateValue={event => {
                setEducation(
                  education.map(
                    job => job.id === id ?
                      {...job, end: event.target.value} : job
                  ));
              }}
            />
          </div>
          <EditorInput
            key="e-comments" name="e_comments" id={`e-comments-${id}`} labelText="Graduation Comments"
            value={subheader} updateValue={event => {
              setEducation(
                education.map(
                  job => job.id === id ?
                    {...job, subheader: event.target.value} : job
                ));
            }}
          />
        </EditorFieldSet>
      )}
    </form>
  );
}

export default function Editor({personalDetailsState, professionalExperienceState, educationState}) {
  let [personalDetails, setPersonalDetails] = personalDetailsState;
  let [professionalExperience, setProfessionalExperience] = professionalExperienceState;
  let [education, setEducation] = educationState;
  return (
    <section id="editor" className="editor-preview-column">
      <EditorPersonalDetails details={personalDetails} setDetails={setPersonalDetails} />
      <EditorProfessionalExperience experiences={professionalExperience} setExperiences={setProfessionalExperience} />
      <EditorEducation education={education} setEducation={setEducation} />
    </section>
  );
}
