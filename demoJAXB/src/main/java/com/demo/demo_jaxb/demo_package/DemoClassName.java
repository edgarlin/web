//
// 此檔案是由 JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.3.0 所產生 
// 請參閱 <a href="https://javaee.github.io/jaxb-v2/">https://javaee.github.io/jaxb-v2/</a> 
// 一旦重新編譯來源綱要, 對此檔案所做的任何修改都將會遺失. 
// 產生時間: 2019.02.26 於 08:07:30 PM CST 
//


package com.demo.demo_jaxb.demo_package;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>demoClassName complex type 的 Java 類別.
 * 
 * <p>下列綱要片段會指定此類別中包含的預期內容.
 * 
 * <pre>
 * &lt;complexType name="demoClassName"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="demoString" type="{http://www.w3.org/2001/XMLSchema}string"/&gt;
 *         &lt;element name="demoByte" type="{http://www.w3.org/2001/XMLSchema}byte"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "demoClassName", propOrder = {
    "demoString",
    "demoByte"
})
public class DemoClassName {

    @XmlElement(required = true)
    protected String demoString;
    protected byte demoByte;

    /**
     * 取得 demoString 特性的值.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDemoString() {
        return demoString;
    }

    /**
     * 設定 demoString 特性的值.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDemoString(String value) {
        this.demoString = value;
    }

    /**
     * 取得 demoByte 特性的值.
     * 
     */
    public byte getDemoByte() {
        return demoByte;
    }

    /**
     * 設定 demoByte 特性的值.
     * 
     */
    public void setDemoByte(byte value) {
        this.demoByte = value;
    }

}
