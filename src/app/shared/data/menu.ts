import {BehaviorSubject} from "rxjs";
import {Menu} from "../interface/menu";

export const menuItems: Menu[] = [
  {
    main_title: 'components'
  },
  {
    title: 'Reports',
    id: 'reports',
    icon: 'reports',
    type: 'sub',
    active: false,
    level: 1,
    badge_color: "success",
    children: [
      { path: '/reports/sales', title: 'Sales', type: 'link' },
    ],
  },
  {
    title: 'Calender',
    id: 'calender',
    icon: 'calendar',
    type: 'link',
    path: '/calendar',
    level: 1,
  },
  {
    title: 'Forms',
    id: 'forms',
    icon: 'form',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      {
        title: 'Form Controls',
        id: 'form-controls',
        type: 'sub',
        active: false,
        level: 2,
        children: [
          {
            path: '/forms/form-control/form-validation',
            title: 'Form Validation',
            type: 'link',
          },
          {
            path: '/forms/form-control/base-input',
            title: 'Base Input',
            type: 'link',
          },
          {
            path: '/forms/form-control/input-groups',
            title: 'Input Groups',
            type: 'link',
          },
          {
            path: '/forms/form-control/input-mask',
            title: 'Input Mask',
            type: 'link',
          },
        ],
      },
      {
        title: 'Form Layout',
        id: 'form-layout',
        type: 'sub',
        active: false,
        level: 2,
        children: [
          {
            path: '/forms/form-layout/form-wizard',
            title: 'Form Wizard 1',
            type: 'link',
          },
        ],
      }
    ]
  },
  {
    title: 'Bonus Ui',
    id: 'bonus-ui',
    icon: 'bonus-kit',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      { path: '/bonus-ui/sweetalert2', title: 'Sweet Alert 2', type: 'link', },
      { path: '/bonus-ui/animated-modal', title: 'Animated Modal', type: 'link', },
      { path: '/bonus-ui/timeline', title: 'Timeline', type: 'link' },
    ],
  },
  {
    title: 'Animations',
    id: 'animations',
    icon: 'animation',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      { path: '/animation/animate', title: 'Animate', type: 'link' },
    ],
  },
  {
    title: 'Icons',
    id: 'icons',
    icon: 'icons',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      { path: '/icon/font-awesome-icon', title: 'Fontawesome Icon', type: 'link' },
      { path: '/icon/thimify-icon', title: 'Themify Icon', type: 'link' },
      { path: '/icon/feather-icon', title: 'Feather Icon', type: 'link' }
    ],
  },
  {
    main_title: 'pages'
  },
  {
    path: '/sample-page',
    id: 'sample-page',
    title: 'Sample Page',
    icon: 'sample-page',
    type: 'link',
    level: 1,
  },
  {
    title: 'Error Pages',
    id: 'error-pages',
    icon: 'error',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      {
        path: '/error/403',
        title: 'Error 403',
        type: 'link',
      },
      {
        path: '/error/404',
        title: 'Error 404',
        type: 'link',
      },
      {
        path: '/error/500',
        title: 'Error 500',
        type: 'link',
      },
      {
        path: '/error/under-maintenance',
        title: 'Maintenance',
        type: 'link',
      },
      {
        path: '/error/coming-soon',
        title: 'Coming Simple',
        type: 'link',
      },
    ],
  },
]

// Array
export const items = new BehaviorSubject<Menu[]>(menuItems);
