function EditorInput({name, id, labelText, inputType="text"}) {
  return (
      <div className="editor-input-wrapper">
        <label htmlFor={id}>{labelText}</label>
        <input className="editor-input" name={name} id={id} type={inputType} />
      </div>
  );
}

function EditorColumn() {
  return (
    <div className="editor-personal-details editor-column">
      <p className="editor-column-header">Personal Details</p>
      <EditorInput name="person_name" id="person-name" labelText="Full Name" />
      <EditorInput name="person_phone" id="person-phone" labelText="Phone Number" />
      <EditorInput name="person_mail" id="person-mail" labelText="Email" inputType="mail" />
      <EditorInput name="person_location" id="person-location" labelText="Location" />
    </div>
  );
}

export default function Editor() {
  return (
    <section id="editor" className="editor-preview-column">
      <EditorColumn />
    </section>
  );
}
