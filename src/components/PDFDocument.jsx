import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import roboto from '/fonts/Roboto-VariableFont_wdth,wght.ttf';
import atkinson from '/fonts/AtkinsonHyperlegibleNext-VariableFont_wght.ttf';
import libertinus from '/fonts/LibertinusMath-Regular.ttf';
import montserrat from '/fonts/Montserrat-VariableFont_wght.ttf';
import opensans from '/fonts/OpenSans-VariableFont_wdth,wght.ttf';
import playfair from '/fonts/PlayfairDisplay-VariableFont_wght.ttf';
import { Svg, Path } from '@react-pdf/renderer';

Font.register({family: 'roboto', src: roboto});
Font.register({family: 'atkinson-hyperlegible-next', src: atkinson});
Font.register({family: 'libertinus-math', src: libertinus});
Font.register({family: 'open-sans', src: opensans});
Font.register({family: 'montserrat', src: montserrat});
Font.register({family: 'playfair-display', src: playfair});

const MailIconSVG = ({ color = '#666666', size = 10 }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24'>
    <Path
      d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
      fill={color}
    />
  </Svg>
);

const PhoneIconSVG = ({ color = '#666666', size = 10 }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24'>
    <Path
      d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'
      fill={color}
    />
  </Svg>
);

const LocationIconSVG = ({ color = '#666666', size = 10 }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24'>
    <Path
      d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
      fill={color}
    />
  </Svg>
);

const PDFDocument = ({ personalData, educationData, practicalData, config }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: config.alignment === 'left' || config.alignment === 'right' ? 'row' : 'column',
      backgroundColor: '#ffffff',
      padding: 20,
      fontFamily: config.font || 'Roboto',
    },
    personalSection: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: config.color,
        padding: 15,
        ...(config.alignment === 'top' ? { marginBottom: 15 } : {}),
        ...(config.alignment === 'bottom' ? { marginTop: 15 } : {}),
        ...(config.alignment === 'left' ? { width: '35%', marginRight: 15 } : {}),
        ...(config.alignment === 'right' ? { width: '35%', marginLeft: 15 } : {}),
    },
    contentSection: {
      flex: 1,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333333',
    },
    contactInfo: {
      flexDirection: config.alignment === 'left' || config.alignment === 'right' ? 'column' : 'row',
      gap: 10,
      flexWrap: 'wrap',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    contactText: {
      fontSize: 10,
      color: '#666666',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 15,
      color: '#333333',
      borderBottom: `1px solid ${config.color}`,
      paddingBottom: 3,
    },
    contentBox: {
      marginBottom: 12,
      breakInside: 'avoid',
    },
    contentHeader: {
      justifyContent: 'center',
      gap: '5px',
      alignItems: 'flex-start',
      marginBottom: 3,
    },
    dateText: {
      fontSize: 9,
    },
    locationText: {
      fontSize: 9,
    },
    contentTitle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 1,
    },
    contentInstitution: {
      fontSize: 11,
      color: '#333333',
      marginBottom: 5,
    },
    contentDescription: {
      fontSize: 10,
      lineHeight: 1.4,
    },
  });

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    return dateString;
  };

  const PersonalSection = () => (
    <View style={styles.personalSection}>
      <Text style={styles.name}>{personalData.name}</Text>
      <View style={styles.contactInfo}>
        {personalData.email && (
            <View style={styles.contactItem}>
                <MailIconSVG />
                <Text style={styles.contactText}> {personalData.email}</Text>
            </View>
        )}
        {personalData.phone && (
            <View style={styles.contactItem}>
                <PhoneIconSVG />
                <Text style={styles.contactText}>{personalData.phone}</Text>
            </View>
        )}
        {personalData.location && (
            <View style={styles.contactItem}>
                <LocationIconSVG />
                <Text style={styles.contactText}>{personalData.location}</Text>
            </View>
        )}
      </View>
    </View>
  );

  const EducationSection = () => (
    educationData.length > 0 && (
      <View>
        <Text style={styles.sectionTitle}>Education</Text>
        {educationData.map((degree) => (
          <View key={degree.id} style={styles.contentBox}>
            <View style={styles.contentHeader}>
              <Text style={styles.dateText}>
                {formatDate(degree.startDate)} | {formatDate(degree.endDate)}
              </Text>
              <Text style={styles.locationText}>{degree.location}</Text>
            </View>
            <Text style={styles.contentTitle}>{degree.degree}</Text>
            <Text style={styles.contentInstitution}>{degree.school}</Text>
            {degree.description && (
              <Text style={styles.contentDescription}>{degree.description}</Text>
            )}
          </View>
        ))}
      </View>
    )
  );

  const ExperienceSection = () => (
    practicalData.length > 0 && (
      <View>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {practicalData.map((job) => (
          <View key={job.id} style={styles.contentBox}>
            <View style={styles.contentHeader}>
              <Text style={styles.dateText}>
                {formatDate(job.startDate)} | {formatDate(job.endDate)}
              </Text>
              <Text style={styles.locationText}>{job.location}</Text>
            </View>
            <Text style={styles.contentTitle}>{job.company}</Text>
            <Text style={styles.contentInstitution}>{job.job}</Text>
            {job.description && (
              <Text style={styles.contentDescription}>{job.description}</Text>
            )}
          </View>
        ))}
      </View>
    )
  );

  const renderContent = () => {
    const sections = [<EducationSection key='education' />, <ExperienceSection key='experience' />];
    
    if (config.alignment === 'left') {
      return (
        <>
          <PersonalSection />
          <View style={styles.contentSection}>
            {sections}
          </View>
        </>
      );
    }
    
    if (config.alignment === 'right') {
      return (
        <>
          <View style={styles.contentSection}>
            {sections}
          </View>
          <PersonalSection />
        </>
      );
    }
    
    if (config.alignment === 'bottom') {
      return (
        <>
          <View style={styles.contentSection}>
            {sections}
          </View>
          <PersonalSection />
        </>
      );
    }
    
    // Default: top
    return (
      <>
        <PersonalSection />
        <View style={styles.contentSection}>
          {sections}
        </View>
      </>
    );
  };

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        {renderContent()}
      </Page>
    </Document>
  );
};

export default PDFDocument;