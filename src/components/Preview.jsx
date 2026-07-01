function PreviewHeaderContact({name, phone, mail, location}) {
  return (
    <div className="preview-header">
      <p className="preview-header-name">{name}</p>
      <ul className="preview-header-contacts-container">
        <li className="preview-header-contact">{phone}</li>
        <li className="preview-header-contact">
          <a href={`mailto:${mail}`}>{mail}</a>
        </li>
        <li className="preview-header-contact">{location}</li>
      </ul>
    </div>
  );
}

function CVSection({header, items}) {
  return (
    <div className="cv-section">
      <p>{header}</p>
      <hr />
    </div>
  );
}

export default function Preview() {
  return (
    <section id="preview" className="editor-preview-column">
      <PreviewHeaderContact name="Langston Smith" phone="xxx-xxx-xxxx"
                            mail="chrome.strikehawks@babylonia.org"
                            location="Babylonia, Space"/>
      <div className="preview-sections-container">
        <CVSection header="PROFESSIONAL EXPERIENCE" />
        <CVSection header="EDUCATION" />
      </div>
    </section>
  );
}
