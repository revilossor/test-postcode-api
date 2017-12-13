FROM centos:7

RUN yum -y install curl

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
RUN yum -y install nodejs

WORKDIR /opt/postcode

ADD package.json .
ADD package-lock.json .

RUN npm i

ADD . .

CMD ["npm", "start"]
