import React from 'react';

class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        return hasError ? <div>Something went wrong</div> : this.props.children;
    }
}

export default ErrorBoundary;