import React from "react";

interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
  children: any
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ? (
        <>{this.props.fallback}</>
      ) : (
        <div>Something went wrong.</div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
