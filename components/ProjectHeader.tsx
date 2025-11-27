import React from 'react';

const ProjectHeader: React.FC = () => {
  return (
    <div className="flex-none border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-2xl font-bold tracking-tight">Marketing Campaign</p>
          <p className="text-sm text-text-light-secondary dark:text-dark-secondary">
            Manage tasks for the Q4 marketing launch.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-surface-light dark:ring-surface-dark"
              data-alt="Team member avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIeMpLDOR3RJtgXpK_FWMBpu8PdIyMLj4nSC1nZ2zvr-zhOjXLMsMUxfO1jsQOjzFdmypeEz6oJKMfrSKmNIBEYWqxX7tVtDe6bbNOmAnfE1k2FESXR__ecUPR14fhJJ2RhOAMtsX74uEUIHIo_Gb80BZOVZikQ2MZcmGwLa2yL4HPhAebrkp4gM6HwhssPYx0y8oCqBtyfXaGShhiJU7ojnR7jMweEG530mJj0o5XPx_gxCceH-QYix1_NrKJ9Sxeo5CR9lI4-8Ww"
              alt="Team member"
            />
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-surface-light dark:ring-surface-dark"
              data-alt="Team member avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1koEXkz19l-hOcVFs6U4xe57RoZG8YUmQdZ5nUJaS1H3lVb2M58GBIGaEkGO0aFV95r8z5-YXmAYYxGeRSpNdlnuPveRL2mv8pVp5UHi10lnCT1rSetU4uB4r4re3eH4EcPjcaeoGzHtWnXK3gvEDDF4k7pnAQoJSrpouq8aZo0n4l0Z1eFVgPrU661YXEUAI822PH6nx8p63qoLq3hTA2f2FFXPJy6UGj8HglILzUiYgrgQKcnCtTgZfz2ubPFEOfXEOR_i63PMQ"
              alt="Team member"
            />
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-surface-light dark:ring-surface-dark"
              data-alt="Team member avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA1wakey0jhbiYN5RTC9JjGuEJsksZw_9cRnJ3twpz2cfGmBI_PnO9NFQKinq_4cyzPFanl4pWVlDo2I3cZNJd7gQ-n9TZUrfZFMmj5T1MJ9sMvk7cj_WE_FAuUSQLCbVCnX2rpkx4RppIZWx6L0uZpHPAISAxXNVgcEz-TzHqT0f5zWPeTUWptr2XH1ggJaSHYUS9IBWxeDZdiu0zIHHKfNrVTH1AVu9JjvCoRd8gHN90vuX4isFXrg-6Z-89HAZC--WZPqHi8Y"
              alt="Team member"
            />
            <a
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-xs font-medium text-text-light-secondary dark:text-dark-secondary hover:border-primary hover:text-primary"
              href="#"
            >
              +2
            </a>
          </div>
          <button className="flex h-9 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary/10 px-4 text-sm font-semibold text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
            <span className="material-symbols-outlined !text-base">person_add</span>
            <span className="truncate">Add Member</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;