/// <reference types="core-js" />
import { IXMLParser } from 'cory/xml/IXMLParser';
export declare class NormalXMLParser implements IXMLParser {
    parse(xmlString: string): Promise<Document>;
}
