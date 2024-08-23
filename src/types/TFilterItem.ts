type TFilterItem = {
    title: string;
    displayedData: string[];
    state?: string | undefined | string[];
    changeState: (newState: string) => void;
    isMultiSelect?: boolean;
}

export default TFilterItem