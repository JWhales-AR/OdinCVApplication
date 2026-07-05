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
  let {timeSpan, header, subheader, description} = item;
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

export default function Preview({personalDetails}) {

  let {fullName, phoneNumber, eMail, location} = personalDetails;

  let professionalExperience = [
    {
      "id": 1,
      "timeSpan": "??? - 2024",
      "header": "Many Task Force Teams",
      "subheader": "Commandant & Captain",
      "description": [
        "Led teams of construct soldiers to their death; unwillingly, of course.",
      ],
    },
    {
      "id": 2,
      "timeSpan": "2024 - Present",
      "header": "Strike Hawks",
      "subheader": "Commandant & Captain",
      "description": [
        "Led a team of elite constructs.\n",
        "Aided the Gray Ravens on multiple occassions.\n",
        "Widely celebrated as the best team in terms of solo mission completion rate.",
      ],
    },
  ];

  let education = [
    {
      "id": 1,
      "timeSpan": "2018 - 2022",
      "header": "F.O.S. College",
      "subheader": "Graduated as Chief Commandant"
    },
    {
      "id": 2,
      "timeSpan": "??? - 2018",
      "header": "Tutored under John Smith",
      "subheader": "Successor to the Smith Name"
    },
  ];

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
