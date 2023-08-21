import React, {Component} from 'react';
class Error extends Component {
    render() {
        return (
                <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gray-500">404</h1>
        <p className="text-xl">Page Not Found</p>
        <p className="text-gray-500">The requested page does not exist.</p>
      </div>
    </div>
        );
    }
}

export default Error;