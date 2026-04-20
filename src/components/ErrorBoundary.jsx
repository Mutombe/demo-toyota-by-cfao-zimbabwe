import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Toyota Zimbabwe error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-silver-100">
          <div className="text-center max-w-md">
            <p className="eyebrow">Something Stalled</p>
            <h1 className="mt-3 font-display font-black text-4xl text-graphite-900">
              We hit a bump in the road.
            </h1>
            <p className="mt-4 text-graphite-500 text-sm">
              Please refresh the page, or get in touch and we'll sort it out for you.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="btn-toyota px-6 py-3 text-xs"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-6 py-3 border-2 border-graphite-900 text-graphite-900 text-xs font-display font-bold tracking-wider uppercase hover:bg-graphite-900 hover:text-white transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
