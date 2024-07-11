
interface Config {
  GENERAL: {
    PORT: number;
    SIMILARITY_MEASURE: string;
  };
  API_KEYS: {
    OPENAI: string;
    GROQ: string;
  };
  API_ENDPOINTS: {
    SEARXNG: string;
    OLLAMA: string;
  };
}


export const getPort = () => 3010;

export const getSimilarityMeasure = () =>
  'cosine'

export const getOpenaiApiKey = () => process.env.OPENAI_API_KEY;

export const getGroqApiKey = () => '';

export const getSearxngApiEndpoint = () => 'http://localhost:32768';

export const getOllamaApiEndpoint = () => '';

