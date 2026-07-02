function EditorInput({name, id, labelText, inputType="text"}) {
  return (
      <div className="editor-input-wrapper">
        <label htmlFor={id}>{labelText}</label>
        <input className="editor-input" name={name} id={id} type={inputType} />
      </div>
  );
}

function EditorFieldSet({children}) {
  return (
    <fieldset className="editor-column-fieldset">
      {children}
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

export default function Editor() {
  return (
    <section id="editor" className="editor-preview-column">
      <EditorPersonalDetails />
    </section>
  );
}
