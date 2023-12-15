import {Component, type ErrorInfo, type ReactNode, Suspense} from "react";

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
          <Suspense fallback="">
            <h2>Error</h2>
          </Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;