import React from "react";

export default function DetailsInformationSection({ data }) {
  return (
    <>
      <section className="Details-note">
        {data.details.map(function (item) {
          return (
            <div key={item._id} className="Details-note-container">
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
              {item.content.type === "normal" && <p>{item.content.data}</p>}

              {item.content.type === "table" && (
                <table border={0} cellPadding="10px">
                  <tr>
                    <td>operating system :</td>
                    <td>kali linux ISO</td>
                  </tr>
                  <tr>
                    <td>memory :</td>
                    <td>8 - 10 RAM</td>
                  </tr>
                  <tr>
                    <td>hardware :</td>
                    <td>mac book pro</td>
                  </tr>
                  <tr>
                    <td>storage size :</td>
                    <td>20GB</td>
                  </tr>
                  <tr>
                    <td>extra plugins :</td>
                    <td>directX 12</td>
                  </tr>
                </table>
              )}

              {item.subDetails.map(function (subData) {
                return (
                  <>
                    {subData.type === "small" && (
                      <span>{subData.subtitle}</span>
                    )}
                    {subData.type === "heading" && <h3>{subData.subtitle}</h3>}

                    {subData.content.type === "normal" && (
                      <p>{subData.content.data}</p>
                    )}

                    {subData.content.type === "table" && (
                      <table border={0} cellPadding="10px">
                        <tr>
                          <td>operating system :</td>
                          <td>kali linux ISO</td>
                        </tr>
                        <tr>
                          <td>memory :</td>
                          <td>8 - 10 RAM</td>
                        </tr>
                        <tr>
                          <td>hardware :</td>
                          <td>mac book pro</td>
                        </tr>
                        <tr>
                          <td>storage size :</td>
                          <td>20GB</td>
                        </tr>
                        <tr>
                          <td>extra plugins :</td>
                          <td>directX 12</td>
                        </tr>
                      </table>
                    )}
                  </>
                );
              })}
            </div>
          );
        })}
        {/*         <div className="Details-note-container">
          <h3>specifications</h3>

          <p>
            A wiki is essentially a database for creating, browsing, and
            searching through information. A wiki allows non-linear, evolving,
            complex, and networked text
          </p>
          <span>laptop service</span>
          <p>
            A wiki is essentially a database for creating, browsing, and
            searching through information. A wiki allows non-linear, evolving,
            complex, and networked text, while also allowing for editor
            argument, debate, and interaction
          </p>
        </div>

        <div className="Details-note-container">
          <h3>measurement</h3>
          <p>
            A wiki is essentially a database for creating, browsing, and
            searching through information. A wiki allows non-linear, evolving,
            complex, and networked text, while also allowing for editor
            argument, debate, and interaction
          </p>

          <h3>hardware requirements</h3>
          <table border={0} cellPadding="10px">
            <tr>
              <td>operating system :</td>
              <td>kali linux ISO</td>
            </tr>
            <tr>
              <td>memory :</td>
              <td>8 - 10 RAM</td>
            </tr>
            <tr>
              <td>hardware :</td>
              <td>mac book pro</td>
            </tr>
            <tr>
              <td>storage size :</td>
              <td>20GB</td>
            </tr>
            <tr>
              <td>extra plugins :</td>
              <td>directX 12</td>
            </tr>
          </table>
        </div>

        <div className="Details-note-container">
          <h3>specifications</h3>
          <span>laptop service</span>
          <p>
            A wiki is essentially a database for creating, browsing, and
            searching through information. A wiki allows non-linear, evolving,
            complex, and networked text, while also allowing for editor
            argument, debate, and interaction regarding the content and
            formatting. A wiki is essentially a database for creating, browsing,
            and searching through information. A wiki allows non-linear,
            evolving, complex, and networked text, while also allowing for
            editor argument, debate, and interaction regarding the content and
            formatting. A wiki is essentially a database for creating, browsing,
            and searching through information. A wiki allows non-linear,
            evolving, complex, and networked text, while also allowing for
            editor argument, debate, and interaction regarding the content and
            formatting. A wiki is essentially a database for creating, browsing,
            and searching through information. A wiki allows non-linear,
            evolving, complex, and networked text, while also allowing for
            editor argument,
          </p>
        </div> */}
      </section>
    </>
  );
}
