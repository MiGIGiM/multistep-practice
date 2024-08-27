type Plan = {
    name:    string;
    pricing: Pricing;
    icon:    string;
    offer:   string;
}

type Pricing = {
    monthly: string;
    yearly:  string;
}

type Addon = {
    name:        string;
    description: string;
    pricing:     Pricing;
}