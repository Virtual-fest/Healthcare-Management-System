import { BehaviorSubject } from "rxjs";
import { Menu } from "../interface/menu";

export const menuItems: Menu[] = [
  {
    title: 'users',
    id: 'users',
    icon: 'user',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      { path: '/user/user-profile/1', title: 'user_profile', type: 'link' },
    ],
  },
  {
    title: 'reports',
    id: 'reports',
    icon: 'reports',
    type: 'sub',
    active: false,
    level: 1,
    badge: true,
    badge_value: "New",
    badge_color: "success",
    children: [
      { path: '/reports/sales', title: 'sales', type: 'link' },
    ],
  },
  {
    title: 'calender',
    id: 'calender',
    icon: 'calendar',
    type: 'link',
    path: '/calendar',
    level: 1,
  },
  {
    main_title: "forms_and_table"
  },
  {
    title: 'forms',
    id: 'forms',
    icon: 'form',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      {
        title: 'form_controls',
        id: 'form-controls',
        type: 'sub',
        active: false,
        level: 2,
        children: [
          {
            path: '/forms/form-control/form-validation',
            title: 'form_validation',
            type: 'link',
          },
          {
            path: '/forms/form-control/base-input',
            title: 'base_input',
            type: 'link',
          },
          {
            path: '/forms/form-control/input-groups',
            title: 'input_groups',
            type: 'link',
          },
          {
            path: '/forms/form-control/input-mask',
            title: 'input_mask',
            type: 'link',
          },
        ],
      },
      {
        title: 'form_widgets',
        id: 'form-widgets',
        type: 'sub',
        active: false,
        level: 2,
        children: [
          {
            path: '/forms/form-widgets/datepicker',
            title: 'datepicker',
            type: 'link',
          },
          {
            path: '/forms/form-widgets/type-ahead',
            title: 'typeahead',
            type: 'link',
          },
          {
            path: '/forms/form-widgets/clipboard',
            title: 'clipboard',
            type: 'link',
          },
        ],
      },
      {
        title: 'form_layout',
        id: 'form-layout',
        type: 'sub',
        active: false,
        level: 2,
        children: [
          {
            path: '/forms/form-layout/form-wizard',
            title: 'form_wizard_1',
            type: 'link',
          },
          {
            path: '/forms/form-layout/form-wizard-two',
            title: 'form_wizard_2',
            type: 'link',
          },
        ],
      }
    ]
  },
  {
    main_title: 'components'
  },
  {
    title: 'bonus_ui',
    id: 'bonus-ui',
    icon: 'bonus-kit',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      { path: '/bonus-ui/toast', title: 'toast', type: 'link' },
      { path: '/bonus-ui/sweetalert2', title: 'sweetAlert2', type: 'link', },
      { path: '/bonus-ui/animated-modal', title: 'animated_modal', type: 'link', },
      { path: '/bonus-ui/ribbons', title: 'ribbons', type: 'link' },
      { path: '/bonus-ui/timeline', title: 'timeline', type: 'link' },
    ],
  },
  {
    title: 'animations',
    id: 'animations',
    icon: 'animation',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      { path: '/animation/animate', title: 'animate', type: 'link' },
    ],
  },
  {
    title: 'icons',
    id: 'isonc',
    icon: 'icons',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      { path: '/icon/flag-icon', title: 'flag_icon', type: 'link' },
      { path: '/icon/font-awesome-icon', title: 'fontawesome_icon', type: 'link', },
      { path: '/icon/ico-icon', title: 'ico_icon', type: 'link' },
      { path: '/icon/thimify-icon', title: 'themify_icon', type: 'link' },
      { path: '/icon/feather-icon', title: 'feather_icon', type: 'link' },
      { path: '/icon/weather-icon', title: 'weather_icon', type: 'link' },
    ],
  },
  {
    main_title: 'pages'
  },
  {
    path: '/sample-page',
    id: 'sample-page',
    title: 'sample_page',
    icon: 'sample-page',
    type: 'link',
    level: 1,
  },
  {
    title: 'error_pages',
    id: 'error-pages',
    icon: 'error',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      {
        path: '/error/403',
        title: 'error_403',
        type: 'link',
      },
      {
        path: '/error/404',
        title: 'error_404',
        type: 'link',
      },
      {
        path: '/error/500',
        title: 'error_500',
        type: 'link',
      },
    ],
  },
  {
    title: 'authentication',
    id: 'authentication',
    icon: 'authenticate',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      {
        path: '/auth/login-bg-image',
        title: 'login_with_bg_image',
        type: 'link',
      },
      {
        path: '/auth/login-bg-image-two',
        title: 'login_with_image_two',
        type: 'link',
      },
      {
        path: '/auth/login-bg-image-three',
        title: 'login_with_image_three',
        type: 'link',
      },
      {
        path: '/auth/login-sweet-alert',
        title: 'login_with_sweetalert',
        type: 'link',
      },
      {
        path: '/auth/register',
        title: 'register_simple',
        type: 'link',
      },
      {
        path: '/auth/register-bg-image',
        title: 'register_with_bg_image',
        type: 'link',
      },
      {
        path: '/auth/register-bg-image-two',
        title: 'register_with_image_two',
        type: 'link',
      },
      {
        path: '/auth/forgot-password',
        title: 'forgot_password',
        type: 'link',
      },
      {
        path: '/auth/reset-password',
        title: 'reset_password',
        type: 'link',
      },
      {
        path: '/auth/maintenance',
        title: 'maintenance',
        type: 'link',
      },
    ],
  },
  {
    title: 'coming_soon',
    id: 'coming-soon',
    icon: 'coming-soon',
    type: 'sub',
    active: false,
    level: 1,
    children: [
      {
        path: '/coming-soon/coming-soon',
        title: 'coming_simple',
        type: 'link',
      },
      {
        path: '/coming-soon/coming-soon-video',
        title: 'coming_with_bg_video',
        type: 'link',
      },
      {
        path: '/coming-soon/coming-soon-image',
        title: 'coming_with_bg_image',
        type: 'link',
      },
    ],
  },
]

// Array
export const items = new BehaviorSubject<Menu[]>(menuItems);
