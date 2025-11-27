export interface Tag {
  label: string;
  colorClass: string; // Tailwind class string for bg and text
}

export interface Task {
  id: string;
  title: string;
  date: string;
  assigneeAvatar?: string;
  tags: Tag[];
  completed?: boolean;
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface BoardData {
  tasks: Record<string, Task>;
  columns: Record<string, Column>;
  columnOrder: string[];
}

export const INITIAL_DATA: BoardData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'Finalize campaign slogan',
      date: 'Oct 25',
      tags: [{ label: 'Bug', colorClass: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' }],
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU9FUhdaahZHB-eHqgmPdAuy6lQ6fI3217u2AbGlHF3Vz2FeUojVGK2P_Xo4tg1ywfLIQMomcf4QYMzBQEd8pKGIzKajnbj1244U1V7DnX2PiScpSocQEVc4Y8m-g1XI7yqyEHZmB8GA6_uqNitrBju0eQkJrQafCQiLgDkQKuSJ_n2WZQmEdNsG-uSm8STqBxue1WVAq3X1i7hej6Kvwo9nEZMr2FtQzw8w1iDjI6pKA4U2DbIiphFg4LpuFFUKnvRIzIPpgk-yNQ'
    },
    'task-2': {
      id: 'task-2',
      title: 'Develop social media assets',
      date: 'Oct 28',
      tags: [{ label: 'Feature', colorClass: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' }],
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj5kXgTE5F5hAKtideW48QxhzUj1FF699gtLo2L1Zyd8Q1W713YcdTpQ7nO4zZuT9hHicyK8nbacMDwzv0FLbq1AjFuQxEgnz6lPv5kQhhlM2qMlNPraKeAqRgedYM9pBUjzPdxKobulP6KwBUuhcRnBJYtiEQ5tH78-sLcbXa_dHpGsrEmi-s05ANN2lnHN4dfGo917D7Z_z7C6wX27qjajnkNGcpZQX03QLm-QFoaMNmUj3aZoUK6gUelT9s3P-VBKkb5QjlgNU4'
    },
    'task-3': {
      id: 'task-3',
      title: 'Draft initial blog post',
      date: 'Nov 2',
      tags: [],
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWGIvZnHSnXkCY9CCQQEnDqeromMTtLoEDkvppsEUAz-VqiaC4hIoVWM5HYqEZTqmOoNDOhiSO9EmYKmuztqYYQoGn2coMxt4KqbgELxTYmq-zSPxVwOdpvQ4RBFoBijw2Sv8fFPmkeCi3rPfZC9vstQBq2VrwMeB32ntvx4_BvW7EoxKftMg6gEyqloMdG72JlX9QJxNcreznBC2PC2MheNk3W0iXTpHMnxaarpt0i069258yZzu1J3z1PgHqETAcTulcD03WSlNO'
    },
    'task-4': {
      id: 'task-4',
      title: 'Design landing page mockups',
      date: 'Nov 5',
      tags: [{ label: 'Design', colorClass: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' }],
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZT3rZXizFqs0iJyxBVxKgW09c_YDqrwJWxI-aRvABDpu4eNMFOAxkJMBIx3DCpmjSnCdW6wqkGxfQWa2T81YeeGaDuQ4dfTYsNSyoClPWrnM_ZjJKqLFY14QSEf7UR5NMBZ--554bUtKZr9GGf2zz05852XZR4nThkWu4_0IdCdBHHmnLMwQl-tI8NaG1sKJYDAeQTuWKJgW4xU-fIwtVVmCJC5US5fSqfeXhXnKwnyIoQVmLeke9qO9Ecch-E4OhcVtwnbLOjiH5'
    },
    'task-5': {
      id: 'task-5',
      title: 'Setup analytics dashboard',
      date: 'Nov 8',
      tags: [],
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsRmwzrnplruHfsZkmU1xBfZXxFkwXv1VR3PPl-pLRSyVb4LbHddPxTS-T95W7lC9rXQKL1f0TywdHvNKeveWvzxFuFWWJm4Jcva9LSSJm63S2a6jsm6SdlELD_Er9qlUzQBjrvsOUv8dMiDfJPC1vNiotAfcLpz0s7i23TwdenuEimHfVyIFUmS0V_Wi3v2PTBRoVyPWAos-6xvTnsCkNnTP_mwYLkzkiXtWHwzBg_cm979KkFmWZW4wsyuuiFeScUoYabLs3or7Q'
    },
    'task-6': {
      id: 'task-6',
      title: 'Write copy for email announcements',
      date: 'Nov 10',
      tags: [{ label: 'Urgent', colorClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300' }],
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWscH4LyruQgC3R3GvGxktrz2mEKm7stk-FQ4TE3Hj3u73vUQd_k3S8QWLfPgquekrrYJotqoOvurcuPXpxsSXpJPtxu_0EunyVLIjPeF2PkHjvv_-E1DyJdfatSXvEcEGrHphMEKipTNveF4WJIxsgzzSMQSuZRO7InqIofwH0g_gqBE7HFH4a_f5EhI3gGS2Jyw568H7fi5whu_oVKKYlne_eSppi7ZUXk4ZPN_tRn4R_FhmLGfmDwxem-Nyfw4_2P6pQsRoRWdN'
    },
    'task-7': {
      id: 'task-7',
      title: 'Create project in ProjectFlow',
      date: 'Completed Oct 20',
      tags: [],
      completed: true,
      assigneeAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY7ILS--3K_jo2OyPeVU-nY5BtA25Rm8sX0eGsyerV-n6ZnOKmOUW-tg56VL7oi4l16pqO759o1tq6E80LPM6MAPTSk3bxk8_GJoW3hjOUI0408Ks2RNzEZHPggZd98Sgh11CyKHahsg48ShrsEb89njsfNLIGpYPoWOPcrWTOe1Nv_we_HDZVAsv1nxdiwczMsSjFwWY7sCtJCblWeqGUYA3nstjLXZMd0yoxJx7EeQHPbg3dqlzRt865wef6B2gy3OfZLPmgMIHz'
    }
  },
  columns: {
    'col-1': { id: 'col-1', title: 'Backlog', taskIds: ['task-1', 'task-2', 'task-3'] },
    'col-2': { id: 'col-2', title: 'To Do', taskIds: ['task-4', 'task-5'] },
    'col-3': { id: 'col-3', title: 'In Progress', taskIds: ['task-6'] },
    'col-4': { id: 'col-4', title: 'Code Review', taskIds: [] },
    'col-5': { id: 'col-5', title: 'Done', taskIds: ['task-7'] },
  },
  columnOrder: ['col-1', 'col-2', 'col-3', 'col-4', 'col-5']
};