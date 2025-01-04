# em-toast-notifications

`em-toast-notifications` is a lightweight, customizable toast notification library that provides an easy way to display success, error, warning, and info messages in your web applications. Built with TypeScript and modern CSS, it ensures a smooth and responsive user experience.

## Installation

Install the package via npm:

```bash
npm install em-toast-notifications
```

## Features

- Lightweight and easy to integrate.
- Configurable toast positions.
- Multiple notification types: success, error, warning, info.
- Prevents auto-close on hover.
- TypeScript support.
- Customizable styles via CSS.

## Usage

### Import the Library

Import the library's CSS and JavaScript into your project:

```javascript
import 'em-toast-notifications/dist/toast.css';
import { Toast } from 'em-toast-notifications';
```

### Initialize the Toast Library

Initialize the library with your desired configuration (e.g., position):

```javascript
const toast = new Toast({ position: 'top-right' });
```

### Display Notifications

You can use the following methods to display different types of notifications:

#### Success
```javascript
toast.success('Operation completed successfully!');
```

#### Error
```javascript
toast.error('An error occurred while processing your request.');
```

#### Warning
```javascript
toast.warning('This action may have unintended consequences.');
```

#### Info
```javascript
toast.info('Here is some additional information.');
```

### Prevent Auto-Close on Hover

By default, toasts close after a few seconds. When hovered, the auto-close is paused.

## Configuration Options

When initializing the `Toast` instance, you can pass a configuration object with the following options:

| Option    | Type   | Default     | Description                               |
|-----------|--------|-------------|-------------------------------------------|
| `position`| string | `top-right` | Sets the position of the toast container. Possible values: `top-left`, `top-right`, `bottom-left`, `bottom-right`. |
| `timeout` | number | `5000`      | Duration (in milliseconds) before the toast auto-closes. |

Example:

```javascript
const toast = new Toast({ position: 'bottom-left', timeout: 7000 });
```

## Customizing Styles

You can override the default styles by targeting the toast CSS classes in your own stylesheet. Here are the main classes:

- `.toast-popup` - Container for all toasts.
- `.toastBody` - Individual toast.
- `.success` - Success notification style.
- `.error` - Error notification style.
- `.warning` - Warning notification style.
- `.info` - Info notification style.

Example:

```css
.toastBody.success {
  background-color: #4caf50;
  color: white;
}

.toastBody.error {
  background-color: #f44336;
  color: white;
}
```

## License

This project is licensed under the ISC License.

## Author

**Emran**

Feel free to contribute to this library by submitting issues or pull requests on the [GitHub repository](https://github.com/Emran-Ali/toast-notifications).

