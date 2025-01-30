import { Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Tag, TagLabel } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const MultipleCard = () => {
    return (
        <SimpleGrid spacing={4} columns={{ base: 1, sm: 1, md: 3 }}>
            <Card>
                <CardHeader>
                    <Heading size='md'>Colectarea deșeurilor nepericuloase</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Colectarea deșeurilor nepericuloase implică procesul de strângere și transportare a materialelor
                        reziduale care nu reprezintă un risc semnificativ pentru sănătatea umană sau mediul înconjurător.
                    </Text>
                </CardBody>
                <CardFooter>
                    <SimpleGrid spacing={2} columns={{ base: 1, sm: 2, md: 2 }}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>reciclare</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>salubritate</TagLabel>
                        </Tag>
                    </SimpleGrid>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Colectarea deșeurilor periculoase</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Colectarea deșeurilor periculoase este un proces specializat care se ocupă de materiale ce pot fi toxice, inflamabile, reactive sau dăunătoare
                        pentru sănătatea oamenilor și mediu.
                    </Text>
                </CardBody>
                <CardFooter>
                    <SimpleGrid spacing={2} columns={{ base: 1, sm: 2, md: 2 }}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>siguranță</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>neutralizare</TagLabel>
                        </Tag>
                    </SimpleGrid>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Comerț cu ridicata al deșeurilor și resturilor</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Această activitate implică achiziționarea, stocarea și vânzarea în cantități mari a materialelor reciclabile sau reutilizabile,
                        precum fier vechi, metale, hârtie, plastic și alte materiale recuperabile.
                    </Text>
                </CardBody>
                <CardFooter>
                    <SimpleGrid spacing={2} columns={{ base: 1, sm: 2, md: 2 }}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>valorificare</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>reutilizare</TagLabel>
                        </Tag>
                    </SimpleGrid>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Transporturi rutiere de mărfuri</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Transportul rutier de mărfuri presupune mutarea produselor și materialelor între diferite locații utilizând vehicule comerciale,
                        cum ar fi camioane și dube.
                    </Text>
                </CardBody>
                <CardFooter>
                    <SimpleGrid spacing={2} columns={{ base: 1, sm: 2, md: 2 }}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>logistică</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>expediere</TagLabel>
                        </Tag>
                    </SimpleGrid>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Transporturi substanțe periculoase</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Activitatea de transport al substanțelor periculoase presupune manipularea, încărcarea, transportul și descărcarea materialelor care pot
                        prezenta riscuri pentru sănătatea oamenilor, siguranța publică sau mediul înconjurător.
                    </Text>
                </CardBody>
                <CardFooter>
                    <SimpleGrid spacing={2} columns={{ base: 1, sm: 2, md: 2}}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>conformitate</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>siguranță</TagLabel>
                        </Tag>
                    </SimpleGrid>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Colectare și tratare a altor reziduuri</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Această activitate implică gestionarea deșeurilor care nu intră în categoriile obișnuite (deșeuri menajere, industriale comune) și
                        necesită metode speciale pentru colectare, tratare și eliminare, în conformitate cu reglementările în vigoare.
                    </Text>
                </CardBody>
                <CardFooter>
                    <SimpleGrid spacing={2} columns={{ base: 1, sm: 2, md: 2}}>
                        <Tag flex='1' size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>sustenabilitate</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel flex={1}>procesare</TagLabel>
                        </Tag>
                    </SimpleGrid>
                </CardFooter>
            </Card>
        </SimpleGrid>
    )
}