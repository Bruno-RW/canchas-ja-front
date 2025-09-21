"use client";

import { useTranslations } from "next-intl";

const Columns = () => {
  const t = useTranslations("Footer.Columns");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Suporte */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{t("Support.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Support.Help")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Support.Security")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Support.Cancel")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Support.Accessibility")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Support.Report")}</a>
          </li>
        </ul>
      </div>

      {/* Comunidade */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{t("Community.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Community.Community1")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Community.Community2")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Community.Community3")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Community.Community4")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Community.Others")}</a>
          </li>
        </ul>
      </div>

      {/* Hospedagem */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{t("Hosting.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Hosting.Announce")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Hosting.Protection")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Hosting.Resources")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("Hosting.Security")}</a>
          </li>
        </ul>
      </div>

      {/* Sobre */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">{t("About.Title")}</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("About.AboutUs")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("About.News")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("About.Functionality")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("About.Careers")}</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">{t("About.Investors")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Columns;
