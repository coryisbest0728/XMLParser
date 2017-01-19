/// <reference types="core-js" />
export interface IXMLParser {
    parse(xmlString: string): Promise<Document>;
}
