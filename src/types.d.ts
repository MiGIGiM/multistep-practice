type Plan = {
    name:    string;
    pricing: Pricing;
    icon:    string;
    offer:   string;
}

type Pricing = {
    monthly: number;
    yearly:  number;
}

type Addon = {
    name:        string;
    description: string;
    pricing:     Pricing;
}