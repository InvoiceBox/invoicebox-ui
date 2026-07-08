import { Component, ErrorInfo, ReactNode } from 'react';

type TProps = {
    // что показать вместо упавшего поддерева; по умолчанию — ничего
    fallback?: ReactNode;
    children: ReactNode;
};

type TState = { hasError: boolean };

// Локальная граница ошибок: исключение в пользовательском render-контенте
// (renderOption/renderValue/children) ломает один виджет, а не всё
// React-дерево приложения-потребителя. Класс — единственный способ
// реализовать границу ошибок в React 18.
// Не экспортируется из пакета: внутренняя страховка, а не публичный API.
export class ErrorBoundary extends Component<TProps, TState> {
    state: TState = { hasError: false };

    static getDerivedStateFromError(): TState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Библиотека намеренно не навязывает трекер ошибок;
        // опциональный onError-контракт — задача 3.7 аудита
        // eslint-disable-next-line no-console
        console.error('[@invoicebox/ui] render error:', error, errorInfo.componentStack);
    }

    render() {
        if (this.state.hasError) return this.props.fallback ?? null;
        return this.props.children;
    }
}
