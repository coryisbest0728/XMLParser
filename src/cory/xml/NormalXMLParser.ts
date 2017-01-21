/**
 * @file The normal xml parse.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IXMLParser } from 'cory/xml/IXMLParser';

export class NormalXMLParser implements IXMLParser {

    /**
     * @override
     * @param xmlString
     * @return {Promise<Document>}
     */
    public parse(xmlString: string): Promise<Document> {
        let domParser: DOMParser = new DOMParser();
        let doc: Document = domParser.parseFromString(
            xmlString.replace(/[\t\r\n]/g, '').replace(/\>\s*\</g, '><'), 'text/xml');
        return Promise.resolve(doc);
    }
}