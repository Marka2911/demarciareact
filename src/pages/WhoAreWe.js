import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ButtonsIndex from "../components/ButtonsIndex";
import PageTitle from "../components/PageTitle";

const WhoAreWe = () => {
  const { t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const buttonData = [
    { text: t("buttons.whoAreWe"), link: "/whoAreWe" },
    { text: t("buttons.whatWeDo"), link: "/whatWeDo" },
    { text: t("buttons.contact"), link: "/contact" },
    { text: t("buttons.ourCollaborators"), link: "/ourCollaborators" },
    { text: t("buttons.projects"), link: "/projects" },
  ];

  const org = t("pages.whoAreWe.organization");

  const data = [
    {
      expanded: true,
      type: "person",
      data: {
        name: org.ceo.name,
        role: org.ceo.role,
      },
      children: [
        {
          expanded: true,
          type: "person",
          data: {
            name: org.cmo.name,
            role: org.cmo.role,
          },
          children: [
            {
              type: "department",
              data: {
                name: org.departments.sales.name,
                description: org.departments.sales.description,
              },
            },
            {
              type: "department",
              data: {
                name: org.departments.marketing.name,
                description: org.departments.marketing.description,
              },
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          data: {
            name: org.cto.name,
            role: org.cto.role,
          },
          children: [
            {
              type: "department",
              data: {
                name: org.departments.development.name,
                description: org.departments.development.description,
              },
            },
            {
              type: "department",
              data: {
                name: org.departments.design.name,
                description: org.departments.design.description,
              },
            },
          ],
        },
      ],
    },
  ];

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div className="person-node">
          <div className="person-info">
            <div className="person-name">{node.data.name}</div>
            <div className="person-role">{node.data.role}</div>
          </div>
        </div>
      );
    } else if (node.type === "department") {
      return (
        <div
          className="department-node"
          onClick={() => {
            setSelectedNode(node);
            setDialogVisible(true);
          }}
        >
          <div className="department-name">{node.data.name}</div>
          <div className="department-icon">
            <i className="pi pi-info-circle"></i>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <ButtonsIndex buttons={buttonData} />

      <div className="who-are-we-page" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)' }}>
        <PageTitle titleKey="pages.whoAreWe.title" />
        
        <div className="who-are-we-container">
          <h1> {t("pages.whoAreWe.title")}</h1>
          <p>{t("pages.whoAreWe.content")}</p>
        </div>
        
        <div className="org-chart-container">
          <div className="simple-org-chart">
            {data.map((node, index) => (
              <div key={index} className="org-node">
                <div className="node-content">
                  <h3>{node.data.name}</h3>
                  <p>{node.data.role}</p>
                </div>
                {node.children && (
                  <div className="node-children">
                    {node.children.map((child, childIndex) => (
                      <div key={childIndex} className="child-node">
                        <div className="node-content">
                          <h4>{child.data.name}</h4>
                          <p>{child.data.role}</p>
                        </div>
                        {child.children && (
                          <div className="grandchildren">
                            {child.children.map((grandchild, grandIndex) => (
                              <div key={grandIndex} className="grandchild-node">
                                <h5>{grandchild.data.name}</h5>
                                <p>{grandchild.data.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {dialogVisible && (
          <div className="modal-overlay" onClick={() => setDialogVisible(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedNode?.data?.name}</h3>
                <button onClick={() => setDialogVisible(false)}>×</button>
              </div>
              <div className="modal-body">
                <p>{selectedNode?.data?.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhoAreWe;
