/**
 * @file The interface of xml parser.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

export interface IXMLParser {

    /**
     * Parse the XML string to the document promise.
     * @param xmlString XML string fragment
     * @return {Promise<Document>} The document promise
     */
    parse(xmlString: string): Promise<Document>;
}