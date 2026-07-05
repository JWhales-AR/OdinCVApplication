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

function CVSectionItem({item}) {
  let {start, end, header, subheader, description} = item;
  let timeSpan = `${start} - ${end}`;
  return (
    <li className="cv-section-item">
      <p className="cv-section-item-time-span">{timeSpan}</p>
      <div className="cv-section-head-desc-wrapper">
        <p className="cv-section-item-header">{header}</p>
        <p className="cv-section-item-subheader">{subheader}</p>
        <p className="cv-section-item-description">{description}</p>
      </div>
    </li>
  );
}

function CVSection({header, items}) {
  return (
    <div className="cv-section">
      <p>{header}</p>
      <hr />
      <ul className="cv-section-item-container">
        {items && items.map(item =>
          <CVSectionItem key={item["id"]} item={item} />
        )}
      </ul>
    </div>
  );
}

export default function Preview({personalDetails, professionalExperience, education}) {
  let {fullName, phoneNumber, eMail, location} = personalDetails;
  return (
    <section id="preview" className="editor-preview-column">
      <PreviewHeaderContact name={fullName} phone={phoneNumber}
                            mail={eMail}
                            location={location} />
      <div className="preview-sections-container">
        <CVSection header="PROFESSIONAL EXPERIENCE"
                   items={professionalExperience} />
        <CVSection header="EDUCATION"
                   items={education} />
      </div>
    </section>
  );
}
