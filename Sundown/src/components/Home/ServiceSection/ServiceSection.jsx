import React, { useState } from 'react';
import styles from './ServiceSection.module.css';
import design from '../../../assets/design.webp';
import project from '../../../assets/project.webp';
import execution from '../../../assets/execution.webp';

const ServiceSection = () => {
    const [currentImage, setCurrentImage] = useState(design);
    const [activeService, setActiveService] = useState('Design');

    const handleImageChange = (newImage, serviceName) => {
        setCurrentImage(newImage);
        setActiveService(serviceName);
    };

    return (
        <section className={styles.serviceSection}>
            <div className={styles.container}>
                <div className={styles.serviceWrapper}>
                    <div className={styles.leftWrapper}>
                        <div className={styles.h2Container}>
                            {['Design', 'Project', 'Execution'].map((service) => (
                                <h2
                                    key={service}
                                    onClick={() => handleImageChange(eval(service.toLowerCase()), service)}
                                    className={activeService === service ? styles.activeH2 : ''}
                                >
                                    {service}
                                </h2>
                            ))}
                        </div>
                        <p>
                            Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.
                        </p>
                    </div>
                    <div className={styles.rightWrapper} style={{ backgroundImage: `url(${currentImage})` }}></div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
